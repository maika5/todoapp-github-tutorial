$(document).ready(function() {
    // 追加ボタンがクリックされたときの処理
    $('#add').on('click', function() {
        // 入力フォームの値を取得
        const inputValue = $('#input').val();

        // 入力値が空でない場合のみ追加
        if (inputValue.trim() !== '') {
            // 新しいリストアイテムを作成
            const li = $('<li>');
            const checkbox = $('<input>').attr({
                type: 'checkbox',
                class: 'task-checkbox'
            });
            const taskText = $('<span>').text(inputValue);

            // チェックボックスの状態が変更されたときの処理
            checkbox.on('change', function() {
                if ($(this).is(':checked')) {
                    taskText.css('text-decoration', 'line-through');
                } else {
                    taskText.css('text-decoration', 'none');
                }
            });

            // リストアイテムに要素を追加
            li.append(checkbox).append(taskText);

            // リストに追加
            $('#todoList').append(li);

            // 入力フォームをクリア
            $('#input').val('');
        }
    });
});
