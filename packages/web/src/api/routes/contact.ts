import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import { contactMessages } from "../database/schema";

// Validate at the boundary; messages are private and have no public read endpoint.
export const contact = {
  submit: base
    .input(
      z.object({
        name: z.string().trim().min(2).max(100),
        email: z.string().trim().email().max(254),
        message: z.string().trim().min(1).max(5000),
        website: z.string().max(0).optional(),
      }),
    )
    .handler(async ({ input }) => {
      await db
        .insert(contactMessages)
        .values({ name: input.name, email: input.email, message: input.message });
      return { success: true };
    }),
};
