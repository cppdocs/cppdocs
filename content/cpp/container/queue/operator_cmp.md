---
title: "operator==,!=,<,<=,>,>=,<=>(std::queue)"
source_path: "cpp/container/queue/operator_cmp"
category: "container"
since: "C++20"
---

Compares the contents of the underlying containers of two container adaptors. The comparison is done by applying the corresponding operator to the underlying containers.

## Declarations
```cpp
template< class T, class Container >
bool operator==( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator!=( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator< ( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator<=( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator> ( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator>=( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```

```cpp
template< class T, std::three_way_comparable Container >
std::compare_three_way_result_t<Container>
operator<=>( const std::queue<T, Container>& lhs,
const std::queue<T, Container>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: container adaptors whose contents to compare

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 410 | C++98 | the semantics of operators !=, >, <= and >= were missing | added |
