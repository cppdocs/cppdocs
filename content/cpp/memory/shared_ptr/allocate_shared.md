---
title: "std::allocate_shared, std::allocate_shared_for_overwrite"
source_path: "cpp/memory/shared_ptr/allocate_shared"
header: "<memory>"
category: "memory"
---

1) Constructs an object of type T and wraps it in a [std::shared_ptr](/cpp/memory/shared_ptr/) using args as the parameter list for the constructor of T. The object is constructed as if by the expression ::new (pv) T(v)(until C++20)[std::allocator_traits](/cpp/memory/allocator_traits/)<A2>::construct(a, pv, v)(since C++20), where pv is an internal void* pointer to storage suitable to hold an object of type T and a is a copy of the allocator rebound to [std::remove_cv_t](/cpp/types/remove_cv/)<T>. The storage is typically larger than sizeof(T) in order to use one allocation for both the control block of the shared pointer and the T object. The [std::shared_ptr](/cpp/memory/shared_ptr/) constructor called by this function enables shared_from_this with a pointer to the newly constructed object of type T. All memory allocation is done using a copy of alloc, which must satisfy the [Allocator](/cpp/named_req/allocator/) requirements. This overload participates in overload resolution only if T is not an array type.

## Declarations
```cpp
template< class T, class Alloc, class... Args >
shared_ptr<T> allocate_shared( const Alloc& alloc, Args&&... args );
```
_(since C++11) (T is non-array)_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared( const Alloc& alloc, std::size_t N );
```
_(since C++20) (T is U[])_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared( const Alloc& alloc );
```
_(since C++20) (T is U[N])_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared( const Alloc& alloc, std::size_t N,
const std::remove_extent_t<T>& u );
```
_(since C++20) (T is U[])_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared( const Alloc& alloc,
const std::remove_extent_t<T>& u );
```
_(since C++20) (T is U[N])_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared_for_overwrite( const Alloc& alloc );
```
_(since C++20) (T is not U[])_

```cpp
template< class T, class Alloc >
shared_ptr<T> allocate_shared_for_overwrite( const Alloc& alloc, std::size_t N );
```
_(since C++20) (T is U[])_

## Parameters
- `alloc`: the Allocator to use
- `args...`: list of arguments with which an instance of T will be constructed
- `N`: array size to use
- `u`: the initial value to initialize every element of the array

## Return value
[std::shared_ptr](/cpp/memory/shared_ptr/) of an instance of type T.

## Notes
Like [std::make_shared](/cpp/memory/shared_ptr/make_shared/), this function typically performs only one allocation, and places both the T object and the control block in the allocated memory block (the standard recommends but does not require this, all known implementations do this). A copy of alloc is stored as part of the control block so that it can be used to deallocate it once both shared and weak reference counts reach zero.

Unlike the std::shared_ptr [constructors](/cpp/memory/shared_ptr/shared_ptr/), std::allocate_shared does not accept a separate custom deleter: the supplied allocator is used for destruction of the control block and the T object, and for deallocation of their shared memory block.

[std::shared_ptr](/cpp/memory/shared_ptr/) supports array types (as of C++17), but std::allocate_shared does not. This functionality is supported by [boost::allocate_shared](https://www.boost.org/doc/libs/1_66_0/libs/smart_ptr/doc/html/smart_ptr.html#make_shared).

A constructor enables shared_from_this with a pointer ptr of type U* means that it determines if U has an unambiguous and accessible(since C++17) base class that is a specialization of [std::enable_shared_from_this](/cpp/memory/enable_shared_from_this/), and if so, the constructor evaluates if (ptr != nullptr && ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired())
ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this)= [std::shared_ptr](/cpp/memory/shared_ptr/)<[std::remove_cv_t](/cpp/types/remove_cv/)<U>>
(*this, const_cast<[std::remove_cv_t](/cpp/types/remove_cv/)<U>*>(ptr));.

The assignment to the [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not atomic and conflicts with any potentially concurrent access to the same object. This ensures that future calls to [shared_from_this()](/cpp/memory/enable_shared_from_this/shared_from_this/) would share ownership with the [std::shared_ptr](/cpp/memory/shared_ptr/) created by this raw pointer constructor.

The test ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired() in the code above makes sure that [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not reassigned if it already indicates an owner. This test is required as of C++17.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <memory>
#include <memory_resource>
#include <vector>
 
class Value
{
    int i;
 
public:
    Value(int i) : i(i) { std::cout << "Value(), i = " << i << '\n'; }
    ~Value() { std::cout << "~Value(), i = " << i << '\n'; }
    void print() const { std::cout << "i = " << i << '\n'; }
};
 
int main()
{
    // Create a polymorphic allocator using the monotonic buffer resource
    std::byte buffer[sizeof(Value) * 8];
    std::pmr::monotonic_buffer_resource resource(buffer, sizeof(buffer));
    std::pmr::polymorphic_allocator<Value> allocator(&resource);
 
    std::vector<std::shared_ptr<Value>> v;
 
    for (int i{}; i != 4; ++i)
        // Use std::allocate_shared with the custom allocator
        v.emplace_back(std::allocate_shared<Value>(allocator, i));
 
    for (const auto& sp : v)
        sp->print();
 
} //< All shared pointers will automatically clean up when they go out of scope.
```

## See also
- [(constructor)](/cpp/memory/shared_ptr/shared_ptr/)
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
