---
title: "std::errc"
source_path: "cpp/error/errc"
header: "<system_error>"
---

The scoped enumeration std::errc defines the values of portable error conditions that correspond to the POSIX error codes.

## Declarations
```cpp
enum class errc;
```
_(since C++11)_

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
#include <system_error>
#include <thread>
 
void print_error(const std::string& details, std::error_code error_code)
{
    std::string value_name;
    if (error_code == std::errc::invalid_argument)
        value_name = "std::errc::invalid_argument";
    if (error_code == std::errc::no_such_file_or_directory)
        value_name = "std::errc::no_such_file_or_directory";
    if (error_code == std::errc::is_a_directory)
        value_name = "std::errc::is_a_directory";
    if (error_code == std::errc::permission_denied)
        value_name = "std::errc::permission_denied";
 
    std::cout << details << ":\n  "
              << std::quoted(error_code.message())
              << " (" << value_name << ")\n\n";
}
 
void print_errno(const std::string& details, int errno_value = errno)
{
    print_error(details, std::make_error_code(std::errc(errno_value)));
}
 
int main()
{
    std::cout << "Detaching a not-a-thread...\n";
    try
    {
        std::thread().detach();
    }
    catch (const std::system_error& e)
    {
        print_error("Error detaching empty thread", e.code());
    }
 
    std::cout << "Opening nonexistent file...\n";
    std::ifstream nofile{"nonexistent-file"};
    if (!nofile.is_open())
        print_errno("Error opening nonexistent file for reading");
 
    std::cout << "Reading from directory as a file...\n";
    std::filesystem::create_directory("dir");
    std::ifstream dir_stream{"dir"};
    [[maybe_unused]] char c = dir_stream.get();
    if (!dir_stream.good())
        print_errno("Error reading data from directory");
 
    std::cout << "Open read-only file for writing...\n";
    std::fstream{"readonly-file", std::ios::out};
    std::filesystem::permissions("readonly-file", std::filesystem::perms::owner_read);
    std::fstream write_readonly("readonly-file", std::ios::out);
    if (!write_readonly.is_open())
        print_errno("Error opening read-only file for writing");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3869 | C++11 | the member constants no_message_available,no_stream_resources, not_a_stream and stream_timeoutreferred to the obsolete POSIX STREAMS API[1] | deprecated them |

## See also
- [error_code](/cpp/error/error_code/)
- [error_condition](/cpp/error/error_condition/)
