---
title: "operator==,!=(std::istream_iterator<T, CharT, Traits, Dist>)"
source_path: "cpp/iterator/istream_iterator/operator_cmp"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Checks whether both lhs and rhs are equal. Two stream iterators are equal if both of them are end-of-stream iterators or both of them refer to the same stream.

## Declarations
```cpp
template< class T, class CharT, class Traits, class Dist >
bool operator==( const std::istream_iterator<T, CharT, Traits, Dist>& lhs,
const std::istream_iterator<T, CharT, Traits, Dist>& rhs );
```

```cpp
template< class T, class CharT, class Traits, class Dist >
bool operator!=( const std::istream_iterator<T, CharT, Traits, Dist>& lhs,
const std::istream_iterator<T, CharT, Traits, Dist>& rhs );
```
_(until C++20)_

```cpp
friend bool operator==( const istream_iterator& i, std::default_sentinel_t );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stream iterators to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 261 | C++98 | the description of operator!= was missing | added |
