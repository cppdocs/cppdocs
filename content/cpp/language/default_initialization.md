---
title: "Default-initialization"
source_path: "cpp/language/default_initialization"
category: "language"
---

This is the initialization performed when an object is constructed with no initializer.

## Notes
References and const scalar objects cannot be default-initialized.

## Example
```cpp
#include <string>
 
struct T1 { int mem; };
 
struct T2
{
    int mem;
    T2() {} // “mem” is not in the initializer list
};
 
int n; // static non-class, a two-phase initialization is done:
       // 1) zero-initialization initializes n to zero
       // 2) default-initialization does nothing, leaving n being zero
 
int main()
{
    [[maybe_unused]]
    int n;            // non-class, the value is indeterminate
    std::string s;    // class, calls default constructor, the value is ""
    std::string a[2]; // array, default-initializes the elements, the value is {"", ""}
//  int& r;           // Error: a reference
//  const int n;      // Error: a const non-class
//  const T1 t1;      // Error: const class with implicit default constructor
    [[maybe_unused]]
    T1 t1;            // class, calls implicit default constructor
    const T2 t2;      // const class, calls the user-provided default constructor
                      // t2.mem is default-initialized
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 178 | C++98 | there was no value-initialization;empty initializer invoked default-initialization(though new T() also performs zero-initialization) | empty initializer invokesvalue-initialization |
| CWG 253 | C++98 | default-initialization of a const object could notcall an implicitly declared default constructor | allowed if all subobjects are initialized |
| CWG 616 | C++98 | lvalue to rvalue conversion of anyuninitialized object was always UB | indeterminate unsigned char is allowed |
| CWG 1787 | C++98 | read from an indeterminate unsigned charcached in a register was UB | made well-defined |

## See also
- [converting constructor](/cpp/language/converting_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy-initialization](/cpp/language/copy_initialization/)
- [direct-initialization](/cpp/language/direct_initialization/)
- [list-initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value-initialization](/cpp/language/value_initialization/)
- [zero-initialization](/cpp/language/zero_initialization/)
- [new](/cpp/language/new/)
