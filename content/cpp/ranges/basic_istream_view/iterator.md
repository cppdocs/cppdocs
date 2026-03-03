---
title: "std::ranges::basic_istream_view::iterator"
source_path: "cpp/ranges/basic_istream_view/iterator"
category: "ranges"
---

[ranges::basic_istream_view](/cpp/ranges/basic_istream_view/)<Val, CharT, Traits>::iterator is the type of the iterators returned by [begin()](/cpp/ranges/basic_istream_view/#begin) of [ranges::basic_istream_view](/cpp/ranges/basic_istream_view/)<Val, CharT, Traits>.

## Declarations
```cpp
struct /*iterator*/;
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | default constructor was provided as C++20iterators must be default_initializable | removed along withthe requirement |
