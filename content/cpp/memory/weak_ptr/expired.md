---
title: "std::weak_ptr<T>::expired"
source_path: "cpp/memory/weak_ptr/expired"
category: "memory"
since: "C++11"
---

Equivalent to use_count() == 0. The destructor for the managed object may not yet have been called, but this object's destruction is imminent (or may have already happened).

## Declarations
```cpp
bool expired() const noexcept;
```
_(since C++11)_

## Return value
true if the managed object has already been deleted, false otherwise.

## Notes
If the managed object is shared among threads, it is only meaningful when expired() returns true.

## Example
```cpp
#include <iostream>
#include <memory>
 
std::weak_ptr<int> gw;
 
void f()
{
    if (!gw.expired())
	std::cout << "gw is valid\n";
    else
        std::cout << "gw is expired\n";
}
 
int main()
{
    {
        auto sp = std::make_shared<int>(42);
	gw = sp;
 
	f();
    }
 
    f();
}
```

## See also
- [lock](/cpp/memory/weak_ptr/lock/)
- [use_count](/cpp/memory/weak_ptr/use_count/)
