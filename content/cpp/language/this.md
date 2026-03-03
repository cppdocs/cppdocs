---
title: "The this pointer"
source_path: "cpp/language/this"
category: "language"
---

[1 Syntax](#Syntax)

## Example
```cpp
class T
{
    int x;
 
    void foo()
    {
        x = 6;       // same as this->x = 6;
        this->x = 5; // explicit use of this->
    }
 
    void foo() const
    {
    //  x = 7; // Error: *this is constant
    }
 
    void foo(int x) // parameter x shadows the member with the same name
    {
        this->x = x; // unqualified x refers to the parameter
                     // “this->” is required for disambiguation
    }
 
    int y;
    T(int x) : x(x),      // uses parameter x to initialize member x
               y(this->x) // uses member x to initialize member y
    {}
 
    T& operator=(const T& b)
    {
        x = b.x;
        return *this; // many overloaded operators return *this
    }
};
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 760 | C++98 | when this is used in a nested class, it wasunspecified whether it is associated withthe nested class or the enclosing class | this always associates withthe innermost nested class,regardless of whether it is ina non-static member function |
| CWG 2271 | C++98 | this could be aliased whenconstructing a non-const object | alias is alsoprohibited in this case |
| CWG 2869 | C++98 | it was unclear whether this could be used in astatic member function of a non-associated class | made clear |
