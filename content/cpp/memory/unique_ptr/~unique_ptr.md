---
title: "std::unique_ptr<T,Deleter>::~unique_ptr"
source_path: "cpp/memory/unique_ptr/~unique_ptr"
category: "memory"
---

If [get()](/cpp/memory/unique_ptr/get/) == nullptr there are no effects. Otherwise, the owned object is destroyed via [get_deleter()](/cpp/memory/unique_ptr/get_deleter/)([get()](/cpp/memory/unique_ptr/get/)).

## Declarations
```cpp
~unique_ptr();
```
_(since C++11) (constexpr since C++23)_

## Notes
Although std::unique_ptr<T> with the default deleter may be constructed with [incomplete type](/cpp/language/incomplete_type/) T, the type T must be complete at the point of code where the destructor is called.

## Example
```cpp
#include <iostream>
#include <memory>
 
int main () 
{
    auto deleter = [](int* ptr)
    {
        std::cout << "[deleter called]\n";
        delete ptr;
    };
 
    std::unique_ptr<int, decltype(deleter)> uniq(new int, deleter);
    std::cout << (uniq ? "not empty\n" : "empty\n");
    uniq.reset();
    std::cout << (uniq ? "not empty\n" : "empty\n");
}
```
