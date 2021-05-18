/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies

import Edit from './edit';
import save from './save'; */

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'ksas-block/ksas-callouts', {
	apiVersion: 2,
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
			default: '', // empty default
        },
    },
	example: {
        attributes: {
            content: 'Please edit this text to whatever message you wish to convey.',
        },
    },
	styles: [
		{
		    name: 'grey',
		    label: __( 'Grey (default)'),
		    isDefault: true
		},
		{
		    name: 'white',
		    label: __( 'White' )
		},
	],
    edit: ( props ) => {
        const {
            attributes: { content },
            setAttributes,
            className,
        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
        return (
            <RichText
                { ...blockProps }
                tagName="p"
                onChange={ onChangeContent }
                value={ content }
            />
        );
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        return (
            <RichText.Content
                { ...blockProps }
                tagName="p"
                value={ props.attributes.content }
            />
        );
    },
} );
