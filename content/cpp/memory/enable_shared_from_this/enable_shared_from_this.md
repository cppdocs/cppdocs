---
title: "std::enable_shared_from_this<T>::enable_shared_from_this"
source_path: "cpp/memory/enable_shared_from_this/enable_shared_from_this"
category: "memory"
since: "C++11"
---

Constructs a new enable_shared_from_this object. [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is [value-initialized](/cpp/language/value_initialization/).

## Declarations
```cpp
constexpr enable_shared_from_this() noexcept;
```
_(since C++11)_

```cpp
enable_shared_from_this( const enable_shared_from_this& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: an enable_shared_from_this to copy

## Notes
There is no move constructor: moving from an object derived from enable_shared_from_this does not transfer its shared identity.

## Example
```cpp
#include <memory>
 
struct Foo : public std::enable_shared_from_this<Foo>
{
    Foo() {} // implicitly calls enable_shared_from_this constructor
    std::shared_ptr<Foo> getFoo() { return shared_from_this(); }
};
 
int main()
{
    std::shared_ptr<Foo> pf1(new Foo);
    auto pf2 = pf1->getFoo(); // shares ownership of object with pf1
}
```

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
