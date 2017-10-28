<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function abacus_preprocess_page(&$variables) {
  
  if (!$variables['logged_in']) {
    $variables['title'] = t('Abacus');
    $variables['content_column_class'] = ' class="col-sm-4 col-sm-offset-4 abacus--main-section"';
  } else if (!empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-sm-7 abacus--main-section abacus--animate-in mb-3"';
    $variables['sidebar_second_column_class'] = ' class="col-sm-5 abacus--animate-in"';
  } else {
    $variables['content_column_class'] = ' class="col-sm-12 abacus--main-section abacus--animate-in mb-3"';
  }
  
  unset($variables['navbar_classes_array']);

  $variables['navbar_classes_array'] = array('navbar');
  
  if (!$variables['logged_in']) {
    unset($variables['tabs']);
    $variables['navbar_classes_array'][] = 'abacus--welcome-header text-center';
  } else {
    if (bootstrap_setting('navbar_inverse')) {
      $variables['navbar_classes_array'][] = 'navbar-inverse';
    } else {
      $variables['navbar_classes_array'][] = 'navbar-default';
    }
  }

  drupal_add_js(array('login' => $variables['logged_in']), 'setting');
}

function abacus_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'user_login') {
    $form['actions']['#attributes'] = array(
      'class' => array('mt-5 text-center')
    );
  } else {
    $form['actions']['cancel']['#weight'] = -1;
    $form['actions']['delete']['#weight'] = -10;
    $form['actions']['delete']['#attributes'] = array(
      'class' => array('mr-5')
    );
  }
}

function abacus_preprocess_button(&$vars) {
  $element = &$vars['element'];
  if ($element['#value'] == 'Log in') {

    unset($element['#icon']);

    // Add the base Abacus button class.
    $element['#attributes']['class'] = array('btn', 'btn-default');

    // Add button size, if necessary.
    if ($size = bootstrap_setting('button_size')) {
      $element['#attributes']['class'][] = $size;
    }

    // Add in the button type class.
    $element['#attributes']['class'][] = 'form-' . $element['#button_type'];

    // Ensure that all classes are unique, no need for duplicates.
    $element['#attributes']['class'] = array_unique($element['#attributes']['class']);
  }
}
