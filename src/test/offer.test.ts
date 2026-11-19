import { describe, expect, it } from "vitest";
import { offer } from "@/lib/offer";

describe("Product offer", () => {
  it("costs R$ 29,90", () => expect(offer.price).toBe(29.9));
  it("has a 20-day guarantee", () => expect(offer.guaranteeDays).toBe(20));
  it("has the reference price R$ 97", () => expect(offer.originalPrice).toBe(97));
});
