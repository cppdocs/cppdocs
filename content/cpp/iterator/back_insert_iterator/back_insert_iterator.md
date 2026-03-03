---
title: "std::back_insert_iterator<Container>::back_insert_iterator"
source_path: "cpp/iterator/back_insert_iterator/back_insert_iterator"
category: "iterator"
since: "C++20"
---

Initializes the underlying pointer to the container to [std::addressof](/cpp/memory/addressof/)(c).

## Declarations
```cpp
explicit back_insert_iterator( Container& c );
```
_(until C++20)_

```cpp
constexpr explicit back_insert_iterator( Container& c );
```
_(since C++20)_

## Parameters
- `c`: container to initialize the inserter with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | default constructor was provided as C++20iterators must be default_initializable | removed along with the requirement |
