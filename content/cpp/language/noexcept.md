---
title: "noexcept operator (since C++11)"
source_path: "cpp/language/noexcept"
category: "language"
since: "C++11"
---

The noexcept operator performs a compile-time check that returns true if an expression is declared to not throw any exceptions.

## Notes
Even if noexcept(expr) is true, an evaluation of expr may still throw as the result of encountering undefined behavior.

If expression is of a class type or (possibly multidimensional) array thereof, temporary materialization requires the destructor be non-deleted and accessible.

## Example
```cpp
#include <iostream>
#include <utility>
#include <vector>
 
void may_throw();
void no_throw() noexcept;
auto lmay_throw = []{};
auto lno_throw = []() noexcept {};
 
class T
{
public:
    ~T(){} // dtor prevents move ctor
           // copy ctor is noexcept
};
 
class U
{
public:
    ~U(){} // dtor prevents move ctor
           // copy ctor is noexcept(false)
    std::vector<int> v;
};
 
class V
{
public:
    std::vector<int> v;
};
 
int main()
{
    T t;
    U u;
    V v;
 
    std::cout << std::boolalpha <<
        "may_throw() is noexcept(" << noexcept(may_throw()) << ")\n"
        "no_throw() is noexcept(" << noexcept(no_throw()) << ")\n"
        "lmay_throw() is noexcept(" << noexcept(lmay_throw()) << ")\n"
        "lno_throw() is noexcept(" << noexcept(lno_throw()) << ")\n"
        "~T() is noexcept(" << noexcept(std::declval<T>().~T()) << ")\n"
        // note: the following tests also require that ~T() is noexcept because
        // the expression within noexcept constructs and destroys a temporary
        "T(rvalue T) is noexcept(" << noexcept(T(std::declval<T>())) << ")\n"
        "T(lvalue T) is noexcept(" << noexcept(T(t)) << ")\n"
        "U(rvalue U) is noexcept(" << noexcept(U(std::declval<U>())) << ")\n"
        "U(lvalue U) is noexcept(" << noexcept(U(u)) << ")\n"
        "V(rvalue V) is noexcept(" << noexcept(V(std::declval<V>())) << ")\n"
        "V(lvalue V) is noexcept(" << noexcept(V(v)) << ")\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2722 | C++17 | it was unclear whether temporary materializationis applied if expression is a prvalue | it is appliedin this case |
| CWG 2792 | C++11 | the noexcept operator was required to determine whether exceptionsmay be thrown in the case of encountering undefined behavior | not required |

## See also
- [noexcept specifier](/cpp/language/noexcept_spec/)
- [Dynamic exception specification](/cpp/language/except_spec/)
