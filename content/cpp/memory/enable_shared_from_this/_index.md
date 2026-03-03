---
title: "std::enable_shared_from_this"
source_path: "cpp/memory/enable_shared_from_this"
header: "<memory>"
---

std::enable_shared_from_this allows an object t that is currently managed by a [std::shared_ptr](/cpp/memory/shared_ptr/) named pt to safely generate additional [std::shared_ptr](/cpp/memory/shared_ptr/) instances pt1, pt2 etc. that all share ownership of t with pt.

## Declarations
```cpp
template< class T >
class enable_shared_from_this;
```
_(since C++11)_

## Notes
The constructors of [std::shared_ptr](/cpp/memory/shared_ptr/) detect the presence of an unambiguous and accessible (i.e. public inheritance is mandatory) enable_shared_from_this base and assign the newly created [std::shared_ptr](/cpp/memory/shared_ptr/) to weak_this if not already owned by a live [std::shared_ptr](/cpp/memory/shared_ptr/). Constructing a [std::shared_ptr](/cpp/memory/shared_ptr/) for an object that is already managed by another [std::shared_ptr](/cpp/memory/shared_ptr/) will not consult weak_this and thus will lead to undefined behavior.

It is permitted to call shared_from_this only on a previously shared object, i.e. on an object managed by [std::shared_ptr](/cpp/memory/shared_ptr/)<T>. Otherwise, [std::bad_weak_ptr](/cpp/memory/bad_weak_ptr/) is thrown (by the [std::shared_ptr](/cpp/memory/shared_ptr/) constructor from a default-constructed weak_this ﻿).

enable_shared_from_this provides the safe alternative to an expression like [std::shared_ptr](/cpp/memory/shared_ptr/)<T>(this), which is likely to result in this being destructed more than once by multiple owners that are unaware of each other (see example below).

## Example
```cpp
#include <iostream>
#include <memory>
 
class Good : public std::enable_shared_from_this<Good>
{
public:
    std::shared_ptr<Good> getptr()
    {
        return shared_from_this();
    }
};
 
class Best : public std::enable_shared_from_this<Best>
{
    struct Private{ explicit Private() = default; };
 
public:
    // Constructor is only usable by this class
    Best(Private) {}
 
    // Everyone else has to use this factory function
    // Hence all Best objects will be contained in shared_ptr
    static std::shared_ptr<Best> create()
    {
        return std::make_shared<Best>(Private());
    }
 
    std::shared_ptr<Best> getptr()
    {
        return shared_from_this();
    }
};
 
struct Bad
{
    std::shared_ptr<Bad> getptr()
    {
        return std::shared_ptr<Bad>(this);
    }
    ~Bad() { std::cout << "Bad::~Bad() called\n"; }
};
 
void testGood()
{
    // Good: the two shared_ptr's share the same object
    std::shared_ptr<Good> good0 = std::make_shared<Good>();
    std::shared_ptr<Good> good1 = good0->getptr();
    std::cout << "good1.use_count() = " << good1.use_count() << '\n';
}
 
void misuseGood()
{
    // Bad: shared_from_this is called without having std::shared_ptr owning the caller
    try
    {
        Good not_so_good;
        std::shared_ptr<Good> gp1 = not_so_good.getptr();
    }
    catch (std::bad_weak_ptr& e)
    {
        // undefined behavior (until C++17) and std::bad_weak_ptr thrown (since C++17)
        std::cout << e.what() << '\n';
    }
}
 
void testBest()
{
    // Best: Same but cannot stack-allocate it:
    std::shared_ptr<Best> best0 = Best::create();
    std::shared_ptr<Best> best1 = best0->getptr();
    std::cout << "best1.use_count() = " << best1.use_count() << '\n';
 
    // Best stackBest; // <- Will not compile because Best::Best() is private.
}
 
void testBad()
{
    // Bad, each shared_ptr thinks it is the only owner of the object
    std::shared_ptr<Bad> bad0 = std::make_shared<Bad>();
    std::shared_ptr<Bad> bad1 = bad0->getptr();
    std::cout << "bad1.use_count() = " << bad1.use_count() << '\n';
} // UB: double-delete of Bad
 
int main()
{
    testGood();
    misuseGood();
 
    testBest();
 
    testBad();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2179(P0033R1) | C++11 | given type T derived from enable_shared_from_this, the behavior ofconstructing two std::shared_ptr<T>s from the same T* object was unclear | the behavior isundefined in this case |
| LWG 2529(P0033R1) | C++11 | it was unclear how the underlying std::weak_ptr is updated | made clear |

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
