---
title: "C++ attribute: nodiscard (since C++17)"
source_path: "cpp/language/attributes/nodiscard"
category: "language"
since: "C++17"
---

If a function declared nodiscard or a function returning an enumeration or class declared nodiscard by value is called from a [discarded-value expression](/cpp/language/expressions/#Discarded-value_expressions) other than a cast to void, the compiler is encouraged to issue a warning.

## Example
```cpp
struct [[nodiscard]] error_info { /*...*/ };
 
error_info enable_missile_safety_mode() { /*...*/ return {}; }
 
void launch_missiles() { /*...*/ }
 
void test_missiles()
{
    enable_missile_safety_mode(); // compiler may warn on discarding a nodiscard value
    launch_missiles();
}
 
error_info& foo() { static error_info e; /*...*/ return e; }
 
void f1() { foo(); } // nodiscard type is not returned by value, no warning
 
// nodiscard( string-literal ) (since C++20):
[[nodiscard("PURE FUN")]] int strategic_value(int x, int y) { return x ^ y; }
 
int main()
{
    strategic_value(4, 2); // compiler may warn on discarding a nodiscard value
    auto z = strategic_value(0, 0); // OK: return value is not discarded
    return z;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P1771R1 | C++17 | [[nodiscard]] on constructors has no effect | can cause a warning if the constructed object is discarded |

## See also
- [ignore](/cpp/utility/tuple/ignore/)
- [tie](/cpp/utility/tuple/tie/)
- [C documentation](/c/language/attributes/nodiscard/)
