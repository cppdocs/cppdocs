---
title: "std::shared_ptr<T>::~shared_ptr"
source_path: "cpp/memory/shared_ptr/~shared_ptr"
category: "memory"
---

If *this owns an object and it is the last shared_ptr owning it, the object is destroyed through the owned deleter.

## Declarations
```cpp
~shared_ptr();
```

## Notes
Unlike [std::unique_ptr](/cpp/memory/unique_ptr/), the deleter of [std::shared_ptr](/cpp/memory/shared_ptr/) is invoked even if the managed pointer is null.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct S
{
    S() { std::cout << "S::S()\n"; }
    ~S() { std::cout << "S::~S()\n"; }
    struct Deleter
    {
        void operator()(S* s) const
        {
            std::cout << "S::Deleter()\n";
            delete s;
        }
    };
};
 
int main()
{
    auto sp = std::shared_ptr<S>{new S, S::Deleter{}};
 
    auto use_count = [&sp](char c)
    {
        std::cout << c << ") use_count(): " << sp.use_count() << '\n';
    };
 
    use_count('A');
    {
        auto sp2 = sp;
        use_count('B');
        {
            auto sp3 = sp;
            use_count('C');
        }
        use_count('D');
    }
    use_count('E');
 
//  sp.reset();
//  use_count('F'); // would print "F) use_count(): 0"
}
```

## See also
- [(destructor)](/cpp/memory/weak_ptr/~weak_ptr/)
