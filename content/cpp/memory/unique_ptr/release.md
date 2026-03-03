---
title: "std::unique_ptr<T,Deleter>::release"
source_path: "cpp/memory/unique_ptr/release"
category: "memory"
---

Releases the ownership of the managed object, if any.

## Declarations
```cpp
pointer release() noexcept;
```
_(since C++11) (constexpr since C++23)_

## Return value
Pointer to the managed object or nullptr if there was no managed object, i.e. the value which would be returned by [get()](/cpp/memory/unique_ptr/get/) before the call.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <memory>
 
struct Foo
{
    Foo() { std::cout << "Foo\n"; }
    ~Foo() { std::cout << "~Foo\n"; }
};
 
// Ownership of the Foo resource is transferred when calling this function
void legacy_api(Foo* owning_foo)
{
    std::cout << __func__ << '\n';
    // [legacy code that no one understands or dares touch anymore]
    // [...]
    delete owning_foo;
}
 
int main()
{
    std::unique_ptr<Foo> managed_foo(new Foo);
    // [code that might return or throw or some such]
    // [...]
    legacy_api(managed_foo.release());
 
    assert(managed_foo == nullptr);
}
```

## See also
- [get](/cpp/memory/unique_ptr/get/)
- [get_deleter](/cpp/memory/unique_ptr/get_deleter/)
- [reset](/cpp/memory/unique_ptr/reset/)
