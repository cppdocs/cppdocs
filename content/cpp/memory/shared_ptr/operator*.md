---
title: "std::shared_ptr<T>::operator*, std::shared_ptr<T>::operator->"
source_path: "cpp/memory/shared_ptr/operator"
category: "memory"
since: "C++11"
---

Dereferences the stored pointer. The behavior is undefined if the stored pointer is null.

## Declarations
```cpp
T& operator*() const noexcept;
```
_(since C++11)_

```cpp
T* operator->() const noexcept;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    Foo(int in) : a(in) {}
    void print() const
    {
        std::cout << "a = " << a << '\n';
    }
    int a;
};
 
int main()
{
    auto ptr = std::make_shared<Foo>(10);
    ptr->print();
    (*ptr).print();
}
```

## See also
- [get](/cpp/memory/shared_ptr/get/)
