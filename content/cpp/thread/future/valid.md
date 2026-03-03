---
title: "std::future<T>::valid"
source_path: "cpp/thread/future/valid"
category: "thread"
since: "C++11"
---

Checks if the future refers to a shared state.

## Declarations
```cpp
bool valid() const noexcept;
```
_(since C++11)_

## Return value
true if *this refers to a shared state, otherwise false.

## Example
```cpp
#include <future>
#include <iostream>
 
int main()
{
    std::promise<void> p;
    std::future<void> f = p.get_future();
 
    std::cout << std::boolalpha;
 
    std::cout << f.valid() << '\n';
    p.set_value();
    std::cout << f.valid() << '\n';
    f.get();
    std::cout << f.valid() << '\n';
}
```

## See also
- [wait](/cpp/thread/future/wait/)
