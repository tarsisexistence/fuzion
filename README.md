# Fuzion

Runtime implementation of shortcut fusion for JavaScript and TypeScript.

<br/>

#### Definition ([haskell docs](https://wiki.haskell.org/Short_cut_fusion))
Shortcut fusion is an optimizer method that merges some function calls into one. E.g., `map f * map g` can be substituted by `map (f * g)`, and `filter p * filter q` can be substituted by `filter (\x -> q x && p x)`. It can also help to remove intermediate data structures. E.g., computing `sum [1..n]` does not require an explicit list structure, and the expression is actually translated into a simple loop.

<br/>

#### API

So far, it supports the following operators:

- <strong>fuzion</strong> - performs left-to-right function composition. In some libraries this function is named `pipe`, `sequence`.
- <strong>map</strong> - applies another function to a list of elements and returns a new result on every element in the calling array.
- <strong>filter</strong> - invokes a provided predicate function for each array element and includes it into the result.
- <strong>forEach</strong> - executes a provided function once for each array element.
- <strong>take</strong> - cuts the length of the produced result. It helps to save operators calls to other operators on array elements that will not be included in the final result.
