---
title: "std::make_unique, std::make_unique_for_overwrite"
source_path: "cpp/memory/unique_ptr/make_unique"
header: "<memory>"
category: "memory"
---

Constructs an object of type T and wraps it in a [std::unique_ptr](/cpp/memory/unique_ptr/).

## Declarations
```cpp
template< class T, class... Args >
unique_ptr<T> make_unique( Args&&... args );
```
_(since C++14) (until C++23) (only for non-array types)_

```cpp
template< class T, class... Args >
constexpr unique_ptr<T> make_unique( Args&&... args );
```
_(since C++23) (only for non-array types)_

```cpp
template< class T >
unique_ptr<T> make_unique( std::size_t size );
```
_(since C++14) (until C++23) (only for array types with unknown bound)_

```cpp
template< class T >
constexpr unique_ptr<T> make_unique( std::size_t size );
```
_(since C++23) (only for array types with unknown bound)_

```cpp
template< class T, class... Args >
/* unspecified */ make_unique( Args&&... args ) = delete;
```
_(since C++14) (only for array types with known bound)_

```cpp
template< class T >
unique_ptr<T> make_unique_for_overwrite();
```
_(since C++20) (until C++23) (only for non-array types)_

```cpp
template< class T >
constexpr unique_ptr<T> make_unique_for_overwrite();
```
_(since C++23) (only for non-array types)_

```cpp
template< class T >
unique_ptr<T> make_unique_for_overwrite( std::size_t size );
```
_(since C++20) (until C++23) (only for array types with unknown bound)_

```cpp
template< class T >
constexpr unique_ptr<T> make_unique_for_overwrite( std::size_t size );
```
_(since C++23) (only for array types with unknown bound)_

```cpp
template< class T, class... Args >
/* unspecified */ make_unique_for_overwrite( Args&&... args ) = delete;
```
_(since C++20) (only for array types with known bound)_

## Parameters
- `args`: list of arguments with which an instance of T will be constructed
- `size`: the length of the array to construct

## Return value
[std::unique_ptr](/cpp/memory/unique_ptr/) of an instance of type T.

## Notes
Unlike [std::make_shared](/cpp/memory/shared_ptr/make_shared/) (which has [std::allocate_shared](/cpp/memory/shared_ptr/allocate_shared/)), std::make_unique does not have an allocator-aware counterpart. allocate_unique proposed in [P0211](https://wg21.link/P0211) would be required to invent the deleter type D for the [std::unique_ptr](/cpp/memory/unique_ptr/)<T,D> it returns which would contain an allocator object and invoke both destroy and deallocate in its operator().

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <memory>
#include <utility>
 
struct Vec3
{
    int x, y, z;
 
    // Following constructor is no longer needed since C++20.
    Vec3(int x = 0, int y = 0, int z = 0) noexcept : x(x), y(y), z(z) {}
 
    friend std::ostream& operator<<(std::ostream& os, const Vec3& v)
    {
        return os << "{ x=" << v.x << ", y=" << v.y << ", z=" << v.z << " }";
    }
};
 
// Output Fibonacci numbers to an output iterator.
template<typename OutputIt>
OutputIt fibonacci(OutputIt first, OutputIt last)
{
    for (int a = 0, b = 1; first != last; ++first)
    {
        *first = b;
        b += std::exchange(a, b);
    }
    return first;
}
 
int main()
{
    // Use the default constructor.
    std::unique_ptr<Vec3> v1 = std::make_unique<Vec3>();
    // Use the constructor that matches these arguments.
    std::unique_ptr<Vec3> v2 = std::make_unique<Vec3>(0, 1, 2);
    // Create a unique_ptr to an array of 5 elements.
    std::unique_ptr<Vec3[]> v3 = std::make_unique<Vec3[]>(5);
 
    // Create a unique_ptr to an uninitialized array of 10 integers,
    // then populate it with Fibonacci numbers.
    std::unique_ptr<int[]> i1 = std::make_unique_for_overwrite<int[]>(10);
    fibonacci(i1.get(), i1.get() + 10);
 
    std::cout << "make_unique<Vec3>():      " << *v1 << '\n'
              << "make_unique<Vec3>(0,1,2): " << *v2 << '\n'
              << "make_unique<Vec3[]>(5):   ";
    for (std::size_t i = 0; i < 5; ++i)
        std::cout << std::setw(i ? 30 : 0) << v3[i] << '\n';
    std::cout << '\n';
 
    std::cout << "make_unique_for_overwrite<int[]>(10), fibonacci(...): [" << i1[0];
    for (std::size_t i = 1; i < 10; ++i)
        std::cout << ", " << i1[i];
    std::cout << "]\n";
}
```

## See also
- [(constructor)](/cpp/memory/unique_ptr/unique_ptr/)
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
