---
title: "C++ attribute: fallthrough (since C++17)"
source_path: "cpp/language/attributes/fallthrough"
category: "language"
since: "C++17"
---

Indicates that the fall through from the previous case label is intentional and should not be diagnosed by a compiler that warns on fallthrough.

## Example
```cpp
void f(int n)
{
    void g(), h(), i();
 
    switch (n)
    {
        case 1:
        case 2:
            g();
            [[fallthrough]];
        case 3: // no warning on fallthrough
            h();
        case 4: // compiler may warn on fallthrough
            if (n < 3)
            {
                i();
                [[fallthrough]]; // OK
            }
            else
            {
                return;
            }
        case 5:
            while (false)
            {
                [[fallthrough]]; // ill-formed: next statement is not
                                 //             part of the same iteration
            }
        case 6:
            [[fallthrough]]; // ill-formed, no subsequent case or default label
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2406 | C++17 | [[fallthrough]] could appear in a loopnested inside the target switch statement | prohibited |

## See also
- [C documentation](/c/language/attributes/fallthrough/)
