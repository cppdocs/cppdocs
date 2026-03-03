---
title: "std::static_pointer_cast, std::dynamic_pointer_cast, std::const_pointer_cast, std::reinterpret_pointer_cast"
source_path: "cpp/memory/shared_ptr/pointer_cast"
header: "<memory>"
category: "memory"
since: "C++11"
---

Creates a new instance of [std::shared_ptr](/cpp/memory/shared_ptr/) whose stored pointer is obtained from r's stored pointer using a cast expression.

## Declarations
```cpp
template< class T, class U >
std::shared_ptr<T> static_pointer_cast( const std::shared_ptr<U>& r ) noexcept;
```
_(since C++11)_

```cpp
template< class T, class U >
std::shared_ptr<T> static_pointer_cast( std::shared_ptr<U>&& r ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
std::shared_ptr<T> dynamic_pointer_cast( const std::shared_ptr<U>& r ) noexcept;
```
_(since C++11)_

```cpp
template< class T, class U >
std::shared_ptr<T> dynamic_pointer_cast( std::shared_ptr<U>&& r ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
std::shared_ptr<T> const_pointer_cast( const std::shared_ptr<U>& r ) noexcept;
```
_(since C++11)_

```cpp
template< class T, class U >
std::shared_ptr<T> const_pointer_cast( std::shared_ptr<U>&& r ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
std::shared_ptr<T> reinterpret_pointer_cast( const std::shared_ptr<U>& r ) noexcept;
```
_(since C++17)_

```cpp
template< class T, class U >
std::shared_ptr<T> reinterpret_pointer_cast( std::shared_ptr<U>&& r ) noexcept;
```
_(since C++20)_

## Parameters
- `r`: the pointer to convert

## Notes
The expressions [std::shared_ptr](/cpp/memory/shared_ptr/)<T>(static_cast<T*>(r.get())), [std::shared_ptr](/cpp/memory/shared_ptr/)<T>(dynamic_cast<T*>(r.get())) and [std::shared_ptr](/cpp/memory/shared_ptr/)<T>(const_cast<T*>(r.get())) might seem to have the same effect, but they all will likely result in undefined behavior, attempting to delete the same object twice!

## Example
```cpp
#include <iostream>
#include <memory>
 
class Base
{
public:
    int a;
    virtual void f() const { std::cout << "I am base!\n"; }
    virtual ~Base() {}
};
 
class Derived : public Base
{
public:
    void f() const override { std::cout << "I am derived!\n"; }
    ~Derived() {}
};
 
int main()
{
    auto basePtr = std::make_shared<Base>();
    std::cout << "Base pointer says: ";
    basePtr->f();
 
    auto derivedPtr = std::make_shared<Derived>();
    std::cout << "Derived pointer says: ";
    derivedPtr->f();
 
    // static_pointer_cast to go up class hierarchy
    basePtr = std::static_pointer_cast<Base>(derivedPtr);
    std::cout << "Base pointer to derived says: ";
    basePtr->f();
 
    // dynamic_pointer_cast to go down/across class hierarchy
    auto downcastedPtr = std::dynamic_pointer_cast<Derived>(basePtr);
    if (downcastedPtr)
    {
        std::cout << "Downcasted pointer says: ";
        downcastedPtr->f();
    }
 
    // All pointers to derived share ownership
    std::cout << "Pointers to underlying derived: "
              << derivedPtr.use_count()
              << '\n';
}
```

## See also
- [(constructor)](/cpp/memory/shared_ptr/shared_ptr/)
