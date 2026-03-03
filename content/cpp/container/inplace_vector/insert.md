---
title: "std::inplace_vector<T,N>::insert"
source_path: "cpp/container/inplace_vector/insert"
category: "container"
since: "C++26"
---

Inserts elements at the specified location in the container.

## Declarations
```cpp
constexpr iterator insert( const_iterator pos, const T& value );
```
_(since C++26)_

```cpp
constexpr iterator insert( const_iterator pos, T&& value );
```
_(since C++26)_

```cpp
constexpr iterator insert( const_iterator pos, size_type count, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt >
constexpr iterator insert( const_iterator pos, InputIt first, InputIt last );
```
_(since C++26)_

```cpp
constexpr iterator insert( const_iterator pos, std::initializer_list<T> ilist );
```
_(since C++26)_

## Parameters
- `pos`: iterator before which the content will be inserted (pos may be the end() iterator)
- `value`: element value to insert
- `count`: number of elements to insert
- `first, last`: the range of elements to insert
- `ilist`: std::initializer_list to insert the values from

## Example
```cpp
#include <initializer_list>
#include <inplace_vector>
#include <iterator>
#include <new>
#include <print>
 
int main()
{
    std::inplace_vector<int, 14> v(3, 100);
    std::println("1. {}", v);
 
    auto pos = v.begin();
    pos = v.insert(pos, 200); // overload (1)
    std::println("2. {}", v);
 
    v.insert(pos, 2, 300); // overload (3)
    std::println("3. {}", v);
 
    int arr[] = {501, 502, 503};
    v.insert(v.begin(), arr, arr + std::size(arr)); // overload (4)
    std::println("4. {}", v);
 
    v.insert(v.end(), {601, 602, 603}); // overload (5)
    std::println("5. {}", v);
 
    const auto list = {-13, -12, -11};
    try
    {
        v.insert(v.begin(), list); // throws: no space
    }
    catch(const std::bad_alloc&)
    {
        std::println("bad_alloc: v.capacity()={} < v.size()={} + list.size()={}",
                     v.capacity(), v.size(), list.size());
    }
}
```

## See also
- [emplace](/cpp/container/inplace_vector/emplace/)
- [insert_range](/cpp/container/inplace_vector/insert_range/)
