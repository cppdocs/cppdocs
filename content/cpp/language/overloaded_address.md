---
title: "Address of an overloaded function"
source_path: "cpp/language/overloaded_address"
category: "language"
---

Besides [function-call expressions](/cpp/language/operator_other/), where [overload resolution](/cpp/language/overload_resolution/) takes place, the name of an overloaded function may appear in the following 7 contexts:

## Example
```cpp
int f(int) { return 1; }
int f(double) { return 2; }
 
void g(int(&f1)(int), int(*f2)(double)) { f1(0); f2(0.0); }
 
template<int(*F)(int)>
struct Templ {};
 
struct Foo
{
    int mf(int) { return 3; }
    int mf(double) { return 4; }
};
 
struct Emp
{
    void operator<<(int (*)(double)) {}
};
 
int main()
{
    // 1. initialization
    int (*pf)(double) = f; // selects int f(double)
    int (&rf)(int) = f; // selects int f(int)
    int (Foo::*mpf)(int) = &Foo::mf; // selects int mf(int)
 
    // 2. assignment
    pf = nullptr;
    pf = &f; // selects int f(double)
 
    // 3. function argument
    g(f, f); // selects int f(int) for the 1st argument
             // and int f(double) for the second
 
    // 4. user-defined operator
    Emp{} << f; //selects int f(double)
 
    // 5. return value
    auto foo = []() -> int (*)(int)
    {
        return f; // selects int f(int)
    };
 
    // 6. cast
    auto p = static_cast<int(*)(int)>(f); // selects int f(int)
 
    // 7. template argument
    Templ<f> t;  // selects int f(int)
 
    // prevent “unused variable” warnings as if by [[maybe_unused]]
    [](...){}(pf, rf, mpf, foo, p, t);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 202 | C++98 | non-type template argument was not a contextof taking the address of an overloaded function | it is |
| CWG 250 | C++98 | function template specializations generated with non-deducedtemplate arguments were not selected from the overload set | also selected |
| CWG 1153 | C++98 | it was unclear whether a given function type matches the target type | made clear |
| CWG 1563 | C++11 | it was unclear whether list-initialization is a contextof taking the address of an overloaded function | made clear |
