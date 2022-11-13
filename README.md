# Fuzion

Runtime implementation of shortcut fusion for JavaScript and TypeScript.

<br/>

### Definition ([haskell docs](https://wiki.haskell.org/Short_cut_fusion))
Shortcut fusion is an optimizer method that merges some function calls into one. E.g. `map f * map g` can be substituted by `map (f * g)` and `filter p * filter q` can be substituted by `filter (\x -> q x && p x)`. It can also help to remove intermediate data structures. E.g. computing `sum [1..n]` does not require an explicit list structure, and the expression is actually translated into a simple loop.
