---
title: "std::basic_ios<CharT,Traits>::clear"
source_path: "cpp/io/basic_ios/clear"
category: "io"
---

Sets the stream error state flags by assigning them the value of state. By default, assigns [std::ios_base::goodbit](/cpp/io/ios_base/iostate/) which has the effect of clearing all error state flags.

## Declarations
```cpp
void clear( std::ios_base::iostate state = std::ios_base::goodbit );
```

## Parameters
- `state`: new error state flags setting. It can be a combination of the following constants: Constant Explanation goodbit no error badbit irrecoverable stream error failbit input/output operation failed (formatting or extraction error) eofbit associated input sequence has reached end-of-file

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    for (char c : {'\n', '4', '1', '.', '3', '\n', 'Z', 'Y', 'X'})
        std::cin.putback(c); // emulate user's input (not portable: see ungetc Notes)
 
    double n;
    while (std::cout << "Please, enter a number: " && !(std::cin >> n))
    {
        std::cin.clear();
        std::string line;
        std::getline(std::cin, line);
        std::cout << line << "\nI am sorry, but '" << line << "' is not a number\n";
    }
    std::cout << n << "\nThank you for entering the number " << n << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 412 | C++98 | an excption would be thrown if the current error stateincludes a bit that is also included in the exceptions() mask | checks the newerror state instead |

## See also
- [setstate](/cpp/io/basic_ios/setstate/)
- [rdstate](/cpp/io/basic_ios/rdstate/)
