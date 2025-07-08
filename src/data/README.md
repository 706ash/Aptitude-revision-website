
# Content Management Guide

This directory contains all the aptitude topics, subtopics, formulas, and key notes in a modular structure.

## Adding New Topics

1. Create a new file in `src/data/topics/` (e.g., `geometry.ts`)
2. Export a topic object following the `Topic` interface
3. Import and add it to the `topicsData` array in `src/data/topicsData.ts`

## Adding Content to Existing Topics

1. Navigate to the relevant topic file in `src/data/topics/`
2. Add new subtopics, formulas, or key notes following the existing structure

## File Structure

```
src/data/
├── README.md                 # This guide
├── topicsData.ts            # Main index file
└── topics/                  # Individual topic files
    ├── arithmetic.ts
    ├── logicalReasoning.ts
    ├── dataInterpretation.ts
    ├── probability.ts
    ├── puzzles.ts
    └── timeWork.ts
```

## Content Types

- **Formulas**: Mathematical formulas with examples and variable explanations
- **Key Notes**: Tips, concepts, definitions, and tricks with importance levels
- **Subtopics**: Grouped content areas within each topic

## Benefits of This Structure

- **Maintainable**: Each topic is in its own file
- **Scalable**: Easy to add new topics and content
- **Organized**: Clear separation of concerns
- **Type-safe**: Full TypeScript support
- **Modular**: Reusable components and templates
