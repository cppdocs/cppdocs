---
title: "std::inplace_vector<T,N>::inplace_vector"
source_path: "cpp/container/inplace_vector/inplace_vector"
category: "container"
since: "C++26"
---

Constructs a new inplace_vector from a variety of data sources.

## Declarations
```cpp
constexpr inplace_vector() noexcept;
```
_(since C++26)_

```cpp
constexpr explicit inplace_vector( size_type count );
```
_(since C++26)_

```cpp
constexpr inplace_vector( size_type count, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt >
constexpr inplace_vector( InputIt first, InputIt last );
```
_(since C++26)_

```cpp
template< /*container-compatible-range*/<T> R >
constexpr inplace_vector( std::from_range_t, R&& rg );
```
_(since C++26)_

```cpp
constexpr inplace_vector( const inplace_vector& other );
```
_(since C++26)_

```cpp
constexpr inplace_vector( inplace_vector&& other )
noexcept(N == 0 || std::is_nothrow_move_constructible_v<T>);
```
_(since C++26)_

```cpp
constexpr inplace_vector( std::initializer_list<T> init );
```
_(since C++26)_

## Parameters
- `count`: the size of the container
- `value`: the value to initialize elements of the container with
- `first, last`: the range [first, last) to copy the elements from
- `rg`: the range of values to initialize elements of the container with
- `other`: another inplace_vector to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with

## Example
```cpp
#include <cassert>
#include <initializer_list>
#include <inplace_vector>
#include <new>
#include <print>
#include <ranges>
 
int main()
{
    std::inplace_vector<int, 4> v1; // overload (1)
    assert(v1.size() == 0 && v1.capacity() == 4);
 
    std::inplace_vector<int, 0> v2; // overload (1), N == 0 is allowed
    assert(v2.size() == 0 && v2.capacity() == 0);
 
    std::inplace_vector<int, 5> v3(3); // overload (2)
    assert(v3.size() == 3 && v3.capacity() == 5);
    std::println("v3 = {}", v3);
 
    try
    {
        std::inplace_vector<int, 3> v(4); // overload (2), throws: count > N
    }
    catch(const std::bad_alloc& ex1)
    {
        std::println("ex1.what(): {}", ex1.what());
    }
 
    std::inplace_vector<int, 5> v4(3, 8); // overload (3)
    assert(v4.size() == 3 && v4.capacity() == 5);
    std::println("v4 = {}", v4);
 
    try
    {
        std::inplace_vector<int, 3> v(4, 2); // overload (3), throws: count > N
    }
    catch(const std::bad_alloc& ex2)
    {
        std::println("ex2.what(): {}", ex2.what());
    }
 
    const auto init = {1, 2, 3};
 
    std::inplace_vector<int, 4> v5(init.begin(), init.end()); // overload (4)
    assert(v5.size() == 3 && v5.capacity() == 4);
    std::println("v5 = {}", v5);
 
    std::inplace_vector<int, 4> v6(std::from_range, init); // overload (5)
    assert(v6.size() == 3 && v6.capacity() == 4);
    std::println("v6 = {}", v6);
 
    std::inplace_vector<int, 4> v7(v6); // overload (6)
    assert(v7.size() == 3 && v7.capacity() == 4);
    std::println("v7 = {}", v7);
    assert(v6.size() == 3);
 
    std::inplace_vector<int, 4> v8(std::move(v6)); // overload (7)
    // Note that after the move v6 is left in valid but indeterminate state.
    assert(v8.size() == 3 && v8.capacity() == 4);
    std::println("v8 = {}", v8);
 
    std::inplace_vector<int, 4> v9(init); // overload (8)
    assert(v9.size() == 3 && v9.capacity() == 4);
    std::println("v9 = {}", v9);
 
    try
    {
        std::inplace_vector<int, 2> v(init); // overload (8), throws: init.size() > N
    }
    catch(const std::bad_alloc& ex3)
    {
        std::println("ex3.what(): {}", ex3.what());
    }
}
```

## See also
- [operator=](/cpp/container/inplace_vector/operator/)
- [capacity](/cpp/container/inplace_vector/capacity/)
- [data](/cpp/container/inplace_vector/data/)
- [size](/cpp/container/inplace_vector/size/)
- [sizessize](/cpp/iterator/size/)
- [data](/cpp/iterator/data/)
