module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Tính năng mới
        'fix', // Sửa lỗi
        'wip', // Đang làm
        'improve', // Cải thiện code
        'refactor', // Tái cấu trúc code
        'docs', // Thêm tài liệu
        'chore', // Thay đổi nhỏ trong quá trình phát triển
        'style', // Sửa lỗi kiểu chữ, định dạng, không ảnh hưởng đến logic
        'test', // Viết test
        'revert', // Revert commit
        'ci', // Change CI/CD
        'build', // Build
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
