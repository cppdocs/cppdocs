---
title: "operator==,!=,<,<=,>,>=,<=>(std::stack)"
source_path: "cpp/container/stack/operator_cmp"
category: "container"
since: "C++20"
---

Compares the contents of the underlying containers of two container adaptors. The comparison is done by applying the corresponding operator to the underlying containers.

## Declarations
```cpp
template< class T, class Container >
bool operator==( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator!=( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator< ( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator<=( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator> ( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, class Container >
bool operator>=( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```

```cpp
template< class T, std::three_way_comparable Container >
std::compare_three_way_result_t<Container>
operator<=>( const std::stack<T, Container>& lhs,
const std::stack<T, Container>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: container adaptors whose contents to compare

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 410 | C++98 | the semantics of all comparison operators were missing | added |
