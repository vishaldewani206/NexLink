export const userDocs = {
  paths: {
    "/api/user/check": {
      post: {
        tags: ["User"],
        description: "Check a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CreateCheckUser" },
            },
          },
        },
        responses: { 200: { description: "checked successfully" } },
      },
    },
  },
}