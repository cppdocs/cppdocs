---
title: "std::make_shared, std::make_shared_for_overwrite"
source_path: "cpp/memory/shared_ptr/make_shared"
header: "<memory>"
category: "memory"
---

1) Constructs an object of type T and wraps it in a [std::shared_ptr](/cpp/memory/shared_ptr/) using args as the parameter list for the constructor of T. The object is constructed as if by the expression ::new (pv) T([std::forward](/cpp/utility/forward/)<Args>(args)...), where pv is an internal void* pointer to storage suitable to hold an object of type T. The storage is typically larger than sizeof(T) in order to use one allocation for both the control block of the shared pointer and the T object. The std::shared_ptr constructor called by this function enables shared_from_this with a pointer to the newly constructed object of type T. This overload participates in overload resolution only if T is not an array type.
(since C++20)

## Declarations
```cpp
template< class T, class... Args >
shared_ptr<T> make_shared( Args&&... args );
```
_(since C++11) (T is not array)_

```cpp
template< class T >
shared_ptr<T> make_shared( std::size_t N );
```
_(since C++20) (T is U[])_

```cpp
template< class T >
shared_ptr<T> make_shared();
```
_(since C++20) (T is U[N])_

```cpp
template< class T >
shared_ptr<T> make_shared( std::size_t N, const std::remove_extent_t<T>& u );
```
_(since C++20) (T is U[])_

```cpp
template< class T >
shared_ptr<T> make_shared( const std::remove_extent_t<T>& u );
```
_(since C++20) (T is U[N])_

```cpp
template< class T >
shared_ptr<T> make_shared_for_overwrite();
```
_(since C++20) (T is not U[])_

```cpp
template< class T >
shared_ptr<T> make_shared_for_overwrite( std::size_t N );
```
_(since C++20) (T is U[])_

## Parameters
- `args`: list of arguments with which an instance of T will be constructed
- `N`: array size to use
- `u`: the initial value to initialize every element of the array

## Return value
[std::shared_ptr](/cpp/memory/shared_ptr/) of an instance of type T.

## Notes
This function may be used as an alternative to [std::shared_ptr](/cpp/memory/shared_ptr/)<T>(new T(args...)). The trade-offs are:

A constructor enables shared_from_this with a pointer ptr of type U* means that it determines if U has an unambiguous and accessible(since C++17) base class that is a specialization of [std::enable_shared_from_this](/cpp/memory/enable_shared_from_this/), and if so, the constructor evaluates if (ptr != nullptr && ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired())
ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this)= [std::shared_ptr](/cpp/memory/shared_ptr/)<[std::remove_cv_t](/cpp/types/remove_cv/)<U>>
(*this, const_cast<[std::remove_cv_t](/cpp/types/remove_cv/)<U>*>(ptr));.

The assignment to the [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not atomic and conflicts with any potentially concurrent access to the same object. This ensures that future calls to [shared_from_this()](/cpp/memory/enable_shared_from_this/shared_from_this/) would share ownership with the [std::shared_ptr](/cpp/memory/shared_ptr/) created by this raw pointer constructor.

The test ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired() in the code above makes sure that [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not reassigned if it already indicates an owner. This test is required as of C++17.

## Example
```cpp
#include <iostream>
#include <memory>
#include <type_traits>
#include <vector>
 
struct C
{
    // constructors needed (until C++20)
    C(int i) : i(i) {}
    C(int i, float f) : i(i), f(f) {}
    int i;
    float f{};
};
 
int main()
{
    // using `auto` for the type of `sp1`
    auto sp1 = std::make_shared<C>(1); // overload (1)
    static_assert(std::is_same_v<decltype(sp1), std::shared_ptr<C>>);
    std::cout << "sp1->{ i:" << sp1->i << ", f:" << sp1->f << " }\n";
 
    // being explicit with the type of `sp2`
    std::shared_ptr<C> sp2 = std::make_shared<C>(2, 3.0f); // overload (1)
    static_assert(std::is_same_v<decltype(sp2), std::shared_ptr<C>>);
    static_assert(std::is_same_v<decltype(sp1), decltype(sp2)>);
    std::cout << "sp2->{ i:" << sp2->i << ", f:" << sp2->f << " }\n";
 
    // shared_ptr to a value-initialized float[64]; overload (2):
    std::shared_ptr<float[]> sp3 = std::make_shared<float[]>(64);
 
    // shared_ptr to a value-initialized long[5][3][4]; overload (2):
    std::shared_ptr<long[][3][4]> sp4 = std::make_shared<long[][3][4]>(5);
 
    // shared_ptr to a value-initialized short[128]; overload (3):
    std::shared_ptr<short[128]> sp5 = std::make_shared<short[128]>();
 
    // shared_ptr to a value-initialized int[7][6][5]; overload (3):
    std::shared_ptr<int[7][6][5]> sp6 = std::make_shared<int[7][6][5]>();
 
    // shared_ptr to a double[256], where each element is 2.0; overload (4):
    std::shared_ptr<double[]> sp7 = std::make_shared<double[]>(256, 2.0);
 
    // shared_ptr to a double[7][2], where each double[2]
    // element is {3.0, 4.0}; overload (4):
    std::shared_ptr<double[][2]> sp8 = std::make_shared<double[][2]>(7, {3.0, 4.0});
 
    // shared_ptr to a vector<int>[4], where each vector
    // has contents {5, 6}; overload (4):
    std::shared_ptr<std::vector<int>[]> sp9 =
        std::make_shared<std::vector<int>[]>(4, {5, 6});
 
    // shared_ptr to a float[512], where each element is 1.0; overload (5):
    std::shared_ptr<float[512]> spA = std::make_shared<float[512]>(1.0);
 
    // shared_ptr to a double[6][2], where each double[2] element
    // is {1.0, 2.0}; overload (5):
    std::shared_ptr<double[6][2]> spB = std::make_shared<double[6][2]>({1.0, 2.0});
 
    // shared_ptr to a vector<int>[4], where each vector
    // has contents {5, 6}; overload (5):
    std::shared_ptr<std::vector<int>[4]> spC =
        std::make_shared<std::vector<int>[4]>({5, 6});
}
```

## See also
- [(constructor)](/cpp/memory/shared_ptr/shared_ptr/)
- [allocate_sharedallocate_shared_for_overwrite](/cpp/memory/shared_ptr/allocate_shared/)
- [enable_shared_from_this](/cpp/memory/enable_shared_from_this/)
- [make_uniquemake_unique_for_overwrite](/cpp/memory/unique_ptr/make_unique/)
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
