---
title: "Value-initialization"
source_path: "cpp/language/value_initialization"
category: "language"
---

This is the initialization performed when an object is constructed with an empty initializer.

## Notes
The syntax T object(); does not initialize an object; it declares a function that takes no arguments and returns T. The way to value-initialize a named variable before C++11 was T object = T();, which value-initializes a temporary and then copy-initializes the object: most compilers [optimize out the copy](/cpp/language/copy_elision/) in this case.

References cannot be value-initialized.

As described in [function-style cast](/cpp/language/explicit_cast/), the syntax T() (1) is prohibited if T names an array type, while T{} (5) is allowed.

All standard containers ([std::vector](/cpp/container/vector/), [std::list](/cpp/container/list/), etc.) value-initialize their elements when constructed with a single size_type argument or when grown by a call to resize(), unless their allocator customizes the behavior of construct.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <vector>
 
struct T1
{
    int mem1;
    std::string mem2;
    virtual void foo() {} // make sure T1 is not an aggregate
}; // implicit default constructor
 
struct T2
{
    int mem1;
    std::string mem2;
    T2(const T2&) {} // user-provided copy constructor
};                   // no default constructor
 
struct T3
{
    int mem1;
    std::string mem2;
    T3() {} // user-provided default constructor
};
 
std::string s{}; // class => default-initialization, the value is ""
 
int main()
{
    int n{};                // scalar => zero-initialization, the value is 0
    assert(n == 0);
    double f = double();    // scalar => zero-initialization, the value is 0.0
    assert(f == 0.0);
    int* a = new int[10](); // array => value-initialization of each element
    assert(a[9] == 0);      //          the value of each element is 0
    T1 t1{};                // class with implicit default constructor =>
    assert(t1.mem1 == 0);   //     t1.mem1 is zero-initialized, the value is 0
    assert(t1.mem2 == "");  //     t1.mem2 is default-initialized, the value is ""
//  T2 t2{};                // error: class with no default constructor
    T3 t3{};                // class with user-provided default constructor =>
    std::cout << t3.mem1;   //     t3.mem1 is default-initialized to indeterminate value
    assert(t3.mem2 == "");  //     t3.mem2 is default-initialized, the value is ""
    std::vector<int> v(3);  // value-initialization of each element
    assert(v[2] == 0);      // the value of each element is 0
    std::cout << '\n';
    delete[] a;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 178 | C++98 | there was no value-initialization; empty initializer invoked default-initialization (though new T() also performs zero-initialization) | empty initializer invokevalue-initialization |
| CWG 543 | C++98 | value-initialization for a class object without anyuser-provided constructors was equivalent to value-initializing each subobject (which need not zero-initialize a member with user-provided default constructor) | zero-initializesthe entire object,then calls thedefault constructor |
| CWG 1301 | C++11 | value-initialization of unions with deleteddefault constructors led to zero-initialization | they aredefault-initialized |
| CWG 1368 | C++98 | any user-provided constructor causedzero-initialization to be skipped | only a user-provideddefault constructorskips zero-initialization |
| CWG 1502 | C++11 | value-initializing a union without a user-provideddefault constructor only zero-initialized theobject, despite default member initializers | performs default-initialization afterzero-initialization |
| CWG 1507 | C++98 | value-initialization for a class object without anyuser-provided constructors did not check the validityof the default constructor when the latter is trivial | the validity of trivialdefault constructoris checked |
| CWG 2820 | C++98 | the default-initialization following the zero-initialization required a non-trivial constructor | not required |
| CWG 2859 | C++98 | value-initialization for a class object might involvezero-initialization even if the default-initializationdoes not actually select a user-provided constructor | there is nozero-initializationin this case |

## See also
- [default constructor](/cpp/language/default_constructor/)
- [explicit](/cpp/language/explicit/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [list-initialization](/cpp/language/list_initialization/)
