"use client";

import { useSyncExternalStore } from "react";

export type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
};

type State = { wishlist: string[]; cart: CartItem[] };

const KEY = "shop:v1";
export const MAX_QTY = 10;
const EMPTY: State = { wishlist: [], cart: [] };

let state: State = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function parse(raw: string | null): State {
  if (!raw) return EMPTY;
  try {
    const v = JSON.parse(raw);
    return {
      wishlist: Array.isArray(v.wishlist) ? v.wishlist : [],
      cart: Array.isArray(v.cart) ? v.cart : [],
    };
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): State {
  if (!loaded && typeof window !== "undefined") {
    loaded = true;
    state = parse(window.localStorage.getItem(KEY));
    window.addEventListener("storage", (e) => {
      if (e.key === KEY) {
        state = parse(e.newValue);
        listeners.forEach((l) => l());
      }
    });
  }
  return state;
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function commit(next: State) {
  state = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // 저장 실패(용량·사생활 보호 모드)는 무시하고 메모리 상태만 유지
  }
  listeners.forEach((l) => l());
}

export function useStore(): State {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
}

export function toggleWish(id: string) {
  const s = getSnapshot();
  commit({
    ...s,
    wishlist: s.wishlist.includes(id)
      ? s.wishlist.filter((x) => x !== id)
      : [...s.wishlist, id],
  });
}

const same = (a: CartItem, b: Omit<CartItem, "quantity">) =>
  a.productId === b.productId && a.color === b.color && a.size === b.size;

export function addToCart(item: Omit<CartItem, "quantity">) {
  const s = getSnapshot();
  const found = s.cart.find((c) => same(c, item));
  commit({
    ...s,
    cart: found
      ? s.cart.map((c) =>
          same(c, item) ? { ...c, quantity: Math.min(MAX_QTY, c.quantity + 1) } : c,
        )
      : [...s.cart, { ...item, quantity: 1 }],
  });
}

export function setQuantity(item: Omit<CartItem, "quantity">, quantity: number) {
  const s = getSnapshot();
  const q = Math.max(1, Math.min(MAX_QTY, quantity));
  commit({ ...s, cart: s.cart.map((c) => (same(c, item) ? { ...c, quantity: q } : c)) });
}

export function removeFromCart(item: Omit<CartItem, "quantity">) {
  const s = getSnapshot();
  commit({ ...s, cart: s.cart.filter((c) => !same(c, item)) });
}

export function clearCart() {
  const s = getSnapshot();
  commit({ ...s, cart: [] });
}
