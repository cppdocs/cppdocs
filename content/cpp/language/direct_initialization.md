---
title: "Direct-initialization"
source_path: "cpp/language/direct_initialization"
category: "language"
---

Initializes an object from explicit set of constructor arguments.

## Notes
Direct-initialization is more permissive than copy-initialization: copy-initialization only considers non-[explicit](/cpp/language/explicit/) constructors and non-explicit user-defined [conversion functions](/cpp/language/cast_operator/), while direct-initialization considers all constructors and all user-defined conversion functions.

In case of ambiguity between a variable declaration using the direct-initialization syntax (1) (with round parentheses) and a [function declaration](/cpp/language/function/), the compiler always chooses function declaration. This disambiguation rule is sometimes counter-intuitive and has been called the [most vexing parse](https://en.wikipedia.org/wiki/most_vexing_parse).

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
struct Foo
{
    int mem;
    explicit Foo(int n) : mem(n) {}
};
 
int main()
{
    std::string s1("test"); // constructor from const char*
    std::string s2(10, 'a');
 
    std::unique_ptr<int> p(new int(1));  // OK: explicit constructors allowed
//  std::unique_ptr<int> p = new int(1); // error: constructor is explicit
 
    Foo f(2); // f is direct-initialized:
              // constructor parameter n is copy-initialized from the rvalue 2
              // f.mem is direct-initialized from the parameter n
//  Foo f2 = 2; // error: constructor is explicit
 
    std::cout << s1 << ' ' << s2 << ' ' << *p << ' ' << f.mem  << '\n';
}
```

## See also
- [copy elision](/cpp/language/copy_elision/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [initializer list](/cpp/language/initializer_list/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
