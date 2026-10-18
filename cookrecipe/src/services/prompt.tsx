export default {

  GENERATE_Recipe_OPTION_PROMPT: `Depends on user instruction create 3 different Recipe variant with Recipe Name with Emoji,
2 line description and main ingredient list in JSON format with field recipeName,description,ingredients (without size) only`,

GENERATE_COMPLETE_RECIPE_PROMPT: `
Output ONLY a valid JSON object. Do not include any markdown, explanations, or reasoning. Do not use snake_case.

Use EXACTLY this JSON structure:
{
  "recipeName": "Recipe Name",
  "description": "Description",
  "ingredients": [{"icon": "emoji", "ingredient": "Ingredient Name", "quantity": "Amount"}],
  "steps": ["Step 1", "Step 2"],
  "calories": 100,
  "cookTime": 30,
  "serveTo": 4,
  "imagePrompt": "A detailed realistic image text prompt of the dish"
}
`
}