---
title: "std::inplace_vector<T,N>::resize"
source_path: "cpp/container/inplace_vector/resize"
category: "container"
since: "C++26"
---

Resizes the container to contain count elements, does nothing if count == size().

## Declarations
```cpp
constexpr void resize( size_type count );
```
_(since C++26)_

```cpp
constexpr void resize( size_type count, const value_type& value );
```
_(since C++26)_

## Parameters
- `count`: new size of the container
- `value`: the value to initialize the new elements with

## Example
```cpp
#include <inplace_vector>
#include <print>
 
int main()
{
    std::inplace_vector<int, 6> v(6, 9);
    std::println("Initially, v = {}", v);
 
    v.resize(2);
    std::println("After resize(2), v = {}", v);
 
    v.resize(4);
    std::println("After resize(4), v = {}", v);
 
    v.resize(6, -1);
    std::println("After resize(6, -1), v = {}", v);
 
    try
    {
        std::print("Trying resize(13): ");
        v.resize(13); // throws, because count > N; v is left unchanged
    }
    catch(const std::bad_alloc& ex)
    {
        std::println("ex.what(): {}", ex.what());
    }
    std::println("After exception, v = {}", v);
}
```

## See also
- [max_size](/cpp/container/inplace_vector/max_size/)
- [size](/cpp/container/inplace_vector/size/)
- [capacity](/cpp/container/inplace_vector/capacity/)
- [empty](/cpp/container/inplace_vector/empty/)
