---
title: "operator<,<=,>,>=(std::basic_const_iterator<Iter>)"
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Compare a basic_const_iterator with another value. These function templates are used when the left operand is not a basic_const_iterator.

## Declarations
```cpp
template< /*not-a-const-iterator*/ I >
friend constexpr bool operator<( const I& x, const basic_const_iterator& y )
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*not-a-const-iterator*/ I >
friend constexpr bool operator>( const I& x, const basic_const_iterator& y )
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*not-a-const-iterator*/ I >
friend constexpr bool operator<=( const I& x, const basic_const_iterator& y )
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

```cpp
template< /*not-a-const-iterator*/ I >
friend constexpr bool operator>=( const I& x, const basic_const_iterator& y )
requires std::random_access_iterator<Iter> && std::totally_ordered_with<Iter, I>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Notes
If the left operand is a basic_const_iterator, the [member comparison functions](/cpp/iterator/basic_const_iterator/operator_cmp/) are used.

## Example
```cpp
#include <iterator>
 
int main()
{
    static int arr[1];
    static constexpr std::basic_const_iterator<int*> it = std::end(arr);
    static_assert(arr < it);
}
```
