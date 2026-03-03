---
title: "std::extents, std::dextents, std::dims"
source_path: "cpp/container/mdspan/extents"
header: "<mdspan>"
category: "container"
since: "C++23"
---

1) Represents a multidimensional index space of rank equal to sizeof...(Extents).

## Declarations
```cpp
template< class IndexType, std::size_t... Extents >
class extents;
```
_(since C++23)_

```cpp
template< class IndexType, std::size_t Rank >
using dextents = /* see below */
```
_(since C++23)_

```cpp
template< std::size_t Rank, class IndexType = std::size_t >
using dims = std::dextents<IndexType, Rank>;
```
_(since C++26)_

## Example
This section is incompleteReason: no example

## See also
- [rank](/cpp/types/rank/)
- [extent](/cpp/types/extent/)
