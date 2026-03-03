---
title: "std::insert_iterator<Container>::insert_iterator"
source_path: "cpp/iterator/insert_iterator/insert_iterator"
category: "iterator"
since: "C++20"
---

Initializes the underlying pointer to the container to [std::addressof](/cpp/memory/addressof/)(c) and the underlying iterator to i.

## Declarations
```cpp
insert_iterator( Container& c, typename Container::iterator i );
```
_(until C++20)_

```cpp
constexpr insert_iterator( Container& c, ranges::iterator_t<Container> i );
```
_(since C++20)_

## Parameters
- `c`: container to initialize the inserter with
- `i`: iterator to initialize the inserter with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 561 | C++98 | the type of i was independent of Container | it is the iterator type of Container |
| P2325R3 | C++20 | default constructor was provided as C++20iterators must be default_initializable | removed along with the requirement |
