---
title: "std::launder"
source_path: "cpp/utility/launder"
header: "<new>"
category: "utility"
since: "C++17"
---

Devirtualization fence with respect to p. Returns a pointer to an object at the same address that p represents, while the object can be a new base class subobject whose most derived class is different from that of the original *p object.

## Declarations
```cpp
template< class T >
constexpr T* launder( T* p ) noexcept;
```
_(since C++17)_

## Notes
std::launder has no effect on its argument. Its return value must be used to access the object. Thus, it's always an error to discard the return value.

Typical uses of std::launder include:

The reachability restriction ensures that std::launder cannot be used to access bytes not accessible through the original pointer, thereby interfering with the compiler's escape analysis.

## Example
```cpp
#include <cassert>
#include <cstddef>
#include <new>
 
struct Base
{
    virtual int transmogrify();
};
 
struct Derived : Base
{
    int transmogrify() override
    {
        new(this) Base;
        return 2;
    }
};
 
int Base::transmogrify()
{
    new(this) Derived;
    return 1;
}
 
static_assert(sizeof(Derived) == sizeof(Base));
 
int main()
{
    // Case 1: the new object failed to be transparently replaceable because
    // it is a base subobject but the old object is a complete object.
    Base base;
    int n = base.transmogrify();
    // int m = base.transmogrify(); // undefined behavior
    int m = std::launder(&base)->transmogrify(); // OK
    assert(m + n == 3);
 
    // Case 2: access to a new object whose storage is provided
    // by a byte array through a pointer to the array.
    struct Y { int z; };
    alignas(Y) std::byte s[sizeof(Y)];
    Y* q = new(&s) Y{2};
    const int f = reinterpret_cast<Y*>(&s)->z; // Class member access is undefined
                                               // behavior: reinterpret_cast<Y*>(&s)
                                               // has value "pointer to s" and does
                                               // not point to a Y object
    const int g = q->z; // OK
    const int h = std::launder(reinterpret_cast<Y*>(&s))->z; // OK
 
    [](...){}(f, g, h); // evokes [[maybe_unused]] effect
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2859 | C++17 | definition of reachable did not consider pointerarithmetic from pointer-interconvertible object | included |
| LWG 3495 | C++17 | std::launder might make pointer to an inactivemember dereferenceable in constant expression | forbidden |
