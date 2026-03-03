---
title: "std::type_index::operator==,!=,<,<=,>,>=,<=>"
source_path: "cpp/types/type_index/operator_cmp"
category: "types"
since: "C++11"
---

Compares the underlying [std::type_info](/cpp/types/type_info/) objects.

## Declarations
```cpp
bool operator==( const type_index& rhs ) const noexcept;
```
_(since C++11)_

```cpp
bool operator!=( const type_index& rhs ) const noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator<( const type_index& rhs ) const noexcept;
```
_(since C++11)_

```cpp
bool operator<=( const type_index& rhs ) const noexcept;
```
_(since C++11)_

```cpp
bool operator>( const type_index& rhs ) const noexcept;
```
_(since C++11)_

```cpp
bool operator>=( const type_index& rhs ) const noexcept;
```
_(since C++11)_

```cpp
std::strong_ordering operator<=>( const type_index& rhs ) const noexcept;
```
_(since C++20)_

## Parameters
- `rhs`: another type_index object to compare to
