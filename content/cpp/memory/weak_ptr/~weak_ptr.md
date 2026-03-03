---
title: "std::weak_ptr<T>::~weak_ptr"
source_path: "cpp/memory/weak_ptr/~weak_ptr"
category: "memory"
since: "C++11"
---

Destroys the weak_ptr object. Results in no effect to the managed object.

## Declarations
```cpp
~weak_ptr();
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <memory>
#include <variant>
 
class Node
{
    char id;
    std::variant<std::weak_ptr<Node>, std::shared_ptr<Node>> ptr;
public:
    Node(char id) : id{id} {}
    ~Node() { std::cout << "  '" << id << "' reclaimed\n"; }
    /*...*/
    void assign(std::weak_ptr<Node> p) { ptr = p; }
    void assign(std::shared_ptr<Node> p) { ptr = p; }
};
 
enum class shared { all, some };
 
void test_cyclic_graph(const shared x)
{
    auto A = std::make_shared<Node>('A');
    auto B = std::make_shared<Node>('B');
    auto C = std::make_shared<Node>('C');
 
    A->assign(B);
    B->assign(C);
 
    if (shared::all == x)
    {
        C->assign(A);
        std::cout << "All links are shared pointers";
    }
    else
    {
        C->assign(std::weak_ptr<Node>(A));
        std::cout << "One link is a weak_ptr";
    }
    /*...*/
    std::cout << "\nLeaving...\n";
}
 
int main()
{
    test_cyclic_graph(shared::some);
    test_cyclic_graph(shared::all); // produces a memory leak
}
```

## See also
- [(destructor)](/cpp/memory/shared_ptr/~shared_ptr/)
