---
title: "std::unique_ptr<T,Deleter>::operator="
source_path: "cpp/memory/unique_ptr/operator"
category: "memory"
---

1) Move assignment operator. Transfers ownership from r to *this as if by calling reset(r.release()) followed by assigning [get_deleter()](/cpp/memory/unique_ptr/get_deleter/) from [std::forward](/cpp/utility/forward/)<Deleter>(r.get_deleter()).

## Declarations
```cpp
unique_ptr& operator=( unique_ptr&& r ) noexcept;
```
_(constexpr since C++23)_

```cpp
template< class U, class E >
unique_ptr& operator=( unique_ptr<U, E>&& r ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr& operator=( std::nullptr_t ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr& operator=( const unique_ptr& ) = delete;
```

## Parameters
- `r`: smart pointer from which ownership will be transferred

## Return value
*this

## Notes
As a move-only type, unique_ptr's assignment operator only accepts [rvalues](/cpp/language/value_category/) arguments (e.g. the result of [std::make_unique](/cpp/memory/unique_ptr/make_unique/) or a std::move'd unique_ptr variable).

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    int id;
    Foo(int id) : id(id) { std::cout << "Foo " << id << '\n'; }
    ~Foo() { std::cout << "~Foo " << id << '\n'; }
};
 
int main() 
{
    std::unique_ptr<Foo> p1(std::make_unique<Foo>(1));
 
    {
        std::cout << "Creating new Foo...\n";
        std::unique_ptr<Foo> p2(std::make_unique<Foo>(2));
        // p1 = p2; // Error ! can't copy unique_ptr
        p1 = std::move(p2);
        std::cout << "About to leave inner block...\n";
 
        // Foo instance will continue to live, 
        // despite p2 going out of scope
    }
 
    std::cout << "About to leave program...\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2047 | C++11 | for overload (2), get_deleter() was assigned fromstd::forward<Deleter>(r.get_deleter()) | corrected tostd::forward<E>(r.get_deleter()) |
| LWG 2118 | C++11 | unique_ptr<T[]>::operator=rejected qualification conversions | accepts |
| LWG 2228(N4366) | C++11 | the converting assignment operatorwas missing the assignability constraint | added the constraint |
| LWG 2246 | C++11 | the assignment target of the converteddeleter of r was not specified | specified as get_deleter() |
| LWG 2899 | C++11 | the move assignment operator was not constrained | constrained |
