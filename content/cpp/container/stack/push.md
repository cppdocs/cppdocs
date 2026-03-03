---
title: "std::stack<T,Container>::push"
source_path: "cpp/container/stack/push"
category: "container"
since: "C++11"
---

Pushes the given element value to the top of the stack.

## Declarations
```cpp
void push( const value_type& value );
```

```cpp
void push( value_type&& value );
```
_(since C++11)_

## Parameters
- `value`: the value of the element to push

## Return value
(none)

## Example
```cpp
#include <array>
#include <cstdint>
#include <iostream>
#include <map>
#include <stack>
#include <stdexcept>
#include <string_view>
 
class BrainHackInterpreter
{
    std::map<unsigned, unsigned> open_brackets, close_brackets;
    std::array<std::uint8_t, 32768> data_{0};
    unsigned program_{0};
    int pos_{0};
 
    void collect_brackets(const std::string_view program)
    {
        std::stack<unsigned> brackets_stack;
 
        for (auto pos{0U}; pos != program.length(); ++pos)
        {
            if (const char c{program[pos]}; '[' == c)
                brackets_stack.push(pos);
            else if (']' == c)
            {
                if (brackets_stack.empty())
                    throw std::runtime_error("Brackets [] do not match!");
                else
                {
                    open_brackets[brackets_stack.top()] = pos;
                    close_brackets[pos] = brackets_stack.top();
                    brackets_stack.pop();
                }
            }
        }
 
        if (!brackets_stack.empty())
            throw std::runtime_error("Brackets [] do not match!");
    }
 
    void check_data_pos(int pos)
    {
        if (pos < 0 or static_cast<int>(data_.size()) <= pos)
            throw std::out_of_range{"Data pointer out of bound!"};
    }
 
public:
    BrainHackInterpreter(const std::string_view program)
    {
        for (collect_brackets(program); program_ < program.length(); ++program_)
            switch (program[program_])
            {
                case '<':
                    check_data_pos(--pos_);
                    break;
                case '>':
                    check_data_pos(++pos_);
                    break;
                case '-':
                    --data_[pos_];
                    break;
                case '+':
                    ++data_[pos_];
                    break;
                case '.':
                    std::cout << data_[pos_];
                    break;
                case ',':
                    std::cin >> data_[pos_];
                    break;
                case '[':
                    if (data_[pos_] == 0)
                        program_ = open_brackets[program_];
                    break;
                case ']':
                    if (data_[pos_] != 0)
                        program_ = close_brackets[program_];
                    break;
            }
    }
};
 
int main()
{
    BrainHackInterpreter
    {
        "++++++++[>++>>++>++++>++++<<<<<-]>[<+++>>+++<-]>[<+"
        "+>>>+<<-]<[>+>+<<-]>>>--------.<<+++++++++.<<----.>"
        ">>>>.<<<------.>..++.<++.+.-.>.<.>----.<--.++.>>>+."
    };
    std::cout << '\n';
}
```

## See also
- [emplace](/cpp/container/stack/emplace/)
- [pop](/cpp/container/stack/pop/)
