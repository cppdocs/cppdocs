---
title: "std::gslice_array<T>::operator="
source_path: "cpp/numeric/valarray/gslice_array/operator"
category: "numeric"
---

Assigns values to all referred elements.

## Declarations
```cpp
void operator=( const T& value ) const;
```

```cpp
void operator=( const std::valarray<T>& val_arr ) const;
```

```cpp
const gslice_array& operator=( const gslice_array& other_arr ) const;
```

## Parameters
- `value`: a value to assign to all of the referred elements
- `val_arr`: std::valarray to assign
- `other_arr`: std::gslice_array to assign

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 123 | C++98 | overload (2) was non-const | made const |
| LWG 253 | C++98 | the copy assignment operator was private | made public |
| LWG 621 | C++98 | the copy assignment operator was non-const | made const |
