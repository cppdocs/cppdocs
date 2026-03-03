---
title: "std::bad_cast"
source_path: "cpp/types/bad_cast"
header: "<typeinfo>"
category: "types"
---

An exception of this type is thrown when a [dynamic_cast](/cpp/language/dynamic_cast/) to a reference type fails the run-time check (e.g. because the types are not related by inheritance), and also from [std::use_facet](/cpp/locale/use_facet/) if the requested facet does not exist in the locale.

## Declarations
```cpp
class bad_cast : public std::exception;
```

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <iostream>
#include <typeinfo>
 
struct Foo { virtual ~Foo() {} };
struct Bar { virtual ~Bar() { std::cout << "~Bar\n"; } };
struct Pub : Bar { ~Pub() override { std::cout << "~Pub\n"; } };
 
int main()
{
    Pub pub;
    try
    {
        [[maybe_unused]]
        Bar& r1 = dynamic_cast<Bar&>(pub); // OK, upcast
 
        [[maybe_unused]]
        Foo& r2 = dynamic_cast<Foo&>(pub); // throws
    }
    catch (const std::bad_cast& e)
    {
        std::cout << "e.what(): " << e.what() << '\n';
    }
}
```
