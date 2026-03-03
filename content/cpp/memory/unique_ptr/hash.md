---
title: "std::hash<std::unique_ptr>"
source_path: "cpp/memory/unique_ptr/hash"
category: "memory"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::unique_ptr](/cpp/memory/unique_ptr/)<T, Deleter> allows users to obtain hashes of objects of type [std::unique_ptr](/cpp/memory/unique_ptr/)<T, Deleter>.

## Declarations
```cpp
template< class T, class Deleter >
struct hash<std::unique_ptr<T, Deleter>>;
```
_(since C++11)_

## Example
```cpp
#include <functional>
#include <iostream>
#include <memory>
 
struct Foo
{
    Foo(int num) : nr(num) { std::cout << "Foo(" << nr << ")\n"; }
 
    ~Foo() { std::cout << "~Foo()\n"; }
 
    bool operator==(const Foo &other) const { return nr == other.nr; };
 
    int nr;
};
 
int main()
{
    std::cout << std::boolalpha << std::hex;
 
    Foo* foo = new Foo(5);
    std::unique_ptr<Foo> up(foo); 
    std::cout << "hash(up):    " << std::hash<std::unique_ptr<Foo>>()(up) << '\n'
              << "hash(foo):   " << std::hash<Foo*>()(foo) << '\n'
              << "*up==*foo:   " << (*up == *foo) << "\n\n";
 
    std::unique_ptr<Foo> other = std::make_unique<Foo>(5);
    std::cout << "hash(up):    " << std::hash<std::unique_ptr<Foo>>()(up) << '\n'
              << "hash(other): " << std::hash<std::unique_ptr<Foo>>()(other) << '\n'
              << "*up==*other: " <<(*up == *other) << "\n\n";
}
```

## See also
- [hash](/cpp/utility/hash/)
